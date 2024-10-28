function Imagem(){
    const link = [
        {urli: "https://cdnb.artstation.com/p/assets/images/images/049/844/707/large/rohland-demoss-malenia-rune-final-full-br.jpg?1653455480"},
        {urli: "https://cdn.oneesports.gg/cdn-data/2024/10/LeagueOfLegends_Ambessa.jpg"},
        {urli: ""},
        {urli: "https://panattos.com.br/uploads/produtos/2017/03/coxinha-de-frango-com-requeijao-mini-congelada.jpg"}
    ]

    return (
        <>
        {link.map((Links)=>(
            <img src={Links.urli} alt="" />
        ))}
        </>
    )
}

export default Imagem