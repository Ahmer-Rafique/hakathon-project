 export interface NavbarItemType {
    label:string;
    href:string;
    isDropdown:boolean;
    dropDownData?:Array<this>
}
   

export const NavbarArray:  Array<NavbarItemType> =[
   {
    label:"Female",
    href:"/female",
    isDropdown: true,
    dropDownData:[
      {
         label:"Dresses",
         href:"/female/dresses",
         isDropdown:false
      },
      {
         label:"T-shirt",
         href:"/female/t-shirt",
         isDropdown:false
      },
      {
         label:"Pents",
         href:"/female/pents",
         isDropdown:false
      },
      {
         label:"Jackets",
         href:"/female/jsckets",
         isDropdown:false
      },
      {
         label:"Sweater",
         href:"/female/sweater",
         isDropdown:false
      }
    ]
   },
   {
    label:"Male",
    href:"/male",
    isDropdown: true,
    dropDownData:[
      {
         label:"Jackets",
         href:"/female/jsckets",
         isDropdown:false
      },
      {
         label:"Sweater",
         href:"/female/sweater",
         isDropdown:false
      }
    ]

   } ,
   {
    label:"Kids",
    href:"/kids",
    isDropdown: false
   },
   {
    label:"All products",
    href:"/all products",
    isDropdown: false
   }
]