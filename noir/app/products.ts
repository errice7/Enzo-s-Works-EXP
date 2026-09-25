export const categories=["Todas as Peças","Calças","Bermudas","Jeans","Camisetas","Moletons"];
export const money=(n:number)=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n);
const image=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const products=[
 {id:1,name:"Camiseta Essential Black",category:"Camisetas",color:"Preto",price:129.90,image:image("photo-1571455786673-9d9d6c194f90"),badge:"ESSENCIAL"},
 {id:2,name:"Moletom Underground",category:"Moletons",color:"Preto",price:289.90,image:image("photo-1710182241241-1709cc2c663e"),badge:"NOVO DROP"},
 {id:3,name:"Calça Cargo Utility",category:"Calças",color:"Carvão",price:249.90,image:image("photo-1758267927982-57d1e8f8dcea"),badge:""},
 {id:4,name:"Jeans Original Denim",category:"Jeans",color:"Índigo",price:259.90,image:image("photo-1602293589930-45aad59ba3ab"),badge:""},
 {id:5,name:"Bermuda Urban Black",category:"Bermudas",color:"Preto",price:159.90,image:image("photo-1471873448154-cc2521b7a613"),badge:""},
 {id:6,name:"Camiseta Essential Grey",category:"Camisetas",color:"Cinza",price:119.90,image:image("photo-1550378492-a6946634368f"),badge:"ESSENCIAL"}
];
