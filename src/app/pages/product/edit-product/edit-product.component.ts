import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, } from "@angular/router";
import {ProductService} from "../../../core/services/product.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoryDto} from "../../../core/dto/category.dto";
import {ProductAttributeDto} from "../../../core/dto/product-atrribute.dto";
import {AttributeService} from "../../../core/services/attribute.service";
import {CategoryService} from "../../../core/services/category.service";
import {ProductToAttributeDto} from "../../../core/dto/product-to-atrribute.dto";
import {mergeMap, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {OneInputDialogComponent} from "../../../dialogs/one-input-dialog/one-input-dialog.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{

  id: string | null;


  categories: CategoryDto[];
  attributes: ProductAttributeDto[];
  inProgress: boolean = false;

  newPhoto: File;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private attributeService: AttributeService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private matDialog: MatDialog,
  ) {}

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl('assets/media/svg/files/blank-image.svg'),
    price: new FormControl(0),
    size: new FormControl(''),
    vendorCode: new FormControl(''),
    weight: new FormControl(''),
    category: new FormControl([]),
    productToAttribute: this.fb.array([]),
    language: new FormControl(''),
    year: new FormControl('')
  }

)

  get productToAttribute() : FormArray {
    return this.formGroup.get("productToAttribute") as FormArray
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct()
    this.getAttributes();
    this.getCategories();
  }

  getProduct() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe((res) => {
        const formData = {...res, price: Number(res.price) };

        if (res.photo[0]?.path) {
          formData.photo = res.photo[0].path;
        } else {
          formData.photo = 'assets/media/svg/files/blank-image.svg';
        }
        this.productToAttribute.clear();
        formData.productToAttribute.forEach((atr: ProductToAttributeDto) => {
          this.setAttribute(atr);
        })

        delete formData.id;
        delete formData.productToAttribute;

        this.formGroup.patchValue(formData)
      })
    }
  }

  getAttributes() {
    this.attributeService.getAttributes().subscribe((res) => {
      this.attributes = res;
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    })
  }

  public CompareCity(Param1: string, Param2: CategoryDto) : boolean {
    return Param1 && Param2 ? Param1 === Param2.id : false;
  }

  compareAttribute(Param1: string, Param2: string) : boolean {
    return Param1 && Param2 ? Param1 === Param2 : false;
  }

  removeAttribute(attribute: any){
    const attributes = this.productToAttribute.value;
    attributes.filter((atr: any) => atr !== attribute);
    console.log(attributes)
    this.productToAttribute.clear();
    attribute.forEach((item: any) => this.productToAttribute.push(this.fb.group(item)))
  }

  addNewAttribute() {
    this.productToAttribute.push(this.fb.group({id: '', value: ''}))
  }
  setAttribute(attribute: ProductToAttributeDto) {
    this.productToAttribute.push(this.fb.group(attribute))
  }

  saveProduct() {
    this.inProgress = true;
    const data = this.formGroup.getRawValue();
    data.category = data.category.map((category: string | CategoryDto) => {
      if (typeof category !== "string") {
        return category;
      }
      return this.categories.find((cat) => cat.id === category)
    })
    data.price = Number(data.price)
    data.year = Number(data.year)
    data.productToAttribute = data.productToAttribute.filter((atr: { id: string; }) => atr.id !== "")
    this.productService.createProduct(data).subscribe((res) => {
      this.inProgress = false;
      this.getProduct();
    })
  }

  updateProduct() {
    this.inProgress = true;
    const data = this.formGroup.getRawValue();
    data.category = data.category.map((category: string | CategoryDto) => {
      if (typeof category !== "string") {
        return category;
      }
      return this.categories.find((cat) => cat.id === category)
    })
    data.price = Number(data.price)
    data.year = Number(data.year)
    data.productToAttribute = data.productToAttribute.filter((atr: { id: string; }) => atr.id !== "")
    this.productService.updateProduct(data, this.id)
      .pipe(
        mergeMap((data: any) => {
          //@ts-ignore
          return (this.newPhoto) ? this.productService.uploadFile(this.id, this.newPhoto) : of(Observable)
        })
      )
      .subscribe((res) => {
        this.inProgress = false;
        this.getProduct();
    })
  }

  saveChanges() {
    if (this.id) {
      this.updateProduct()
    } else {
      this.saveProduct();
    }
  }

  uploadPhoto($event: Event) {
    //@ts-ignore
    this.newPhoto = $event.srcElement.files[0];
  }

  openCreateCategoryModal() {
    this.matDialog.open(OneInputDialogComponent, {
      data: {
        dialogTitle: 'Create category',
        inputName: 'Category name'
      }
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.createCategory(res).subscribe(() => {
          this.getCategories();
        })
      }
      console.log(res)
    })
  }

  openCreateAttributeModal() {
    this.matDialog.open(OneInputDialogComponent, {
      data: {
        dialogTitle: 'Create Category',
        inputName: 'Category name'
      }
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.attributeService.createAttribute(res).subscribe(() => {
          this.getAttributes();
        })
      }
      console.log(res)
    })
  }
}
