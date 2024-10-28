function Imagens(){
    const imgs = [
        { url: "https://i.uai.com.br/o_qshLGzm4zHLJpa2Vg-KPKzkxI=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2020/01/20/255043/20200120074023148429u.jpg" , altText: "Slim Shady"},
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5d9-IBoWnrSnl_5dwD8a1CQ3-fJxtokWGg&s" ,altText: "Yung buda"},
        { url: "https://midias.correiobraziliense.com.br/_midias/png/2023/08/14/640x853/1_chaves-28978945.png?20230814180830?20230814180830" ,altText: "Chavinho"},
    ]
    return(
        <>
        {imgs.map((img) => (<img src={img.url} alt={img.altText} />))}  
        </>
    )
}
export default Imagens