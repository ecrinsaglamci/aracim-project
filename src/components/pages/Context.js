import React, {Component} from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        cars: [
            {
                "_id" : "1",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Ficdn.ensonhaber.com%2Fresimler%2Fdiger%2Fkok%2F2021%2F07%2F29%2Fvolkswagen-taigo_8769.jpg&imgrefurl=https%3A%2F%2Fwww.ensonhaber.com%2Fotomobil%2Fyeni-volkswagen-taigo-turkiye-fiyati-belli-oldu&tbnid=Swym3F-uBb62wM&vet=12ahUKEwjV49WcqMP4AhUEgv0HHaEtCisQMygCegUIARDBAQ..i&docid=KhUBwYmxQTriXM&w=1200&h=675&q=volkswagen&ved=2ahUKEwjV49WcqMP4AhUEgv0HHaEtCisQMygCegUIARDBAQ",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "2",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "3",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "4",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "5",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "6",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "seri": "VW CC 1.4 TSI ",
                "model": "Exclusive ",
                "yıl": "2016",
                "yakıt": "Benzin",
                "vites": "Yarı Otomatik",
                "km": "88.500",
                "renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            }
        ]
    }

    render() {
        const {cars} = this.state;
        return (
            <DataContext.Provider value={{cars}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}