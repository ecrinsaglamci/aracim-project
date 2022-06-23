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
                "Seri": "VW CC 1.4 TSI ",
                "Model": "Exclusive ",
                "Yıl": "2016",
                "Yakıt": "Benzin",
                "Vites": "Yarı Otomatik",
                "KM": "88.500",
                "Renk": "Beyaz",
                "src": "../../assets/Cars/Wolkswagen-1.jpeg",
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
                "src": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "3",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "Seri": "VW CC 1.4 TSI ",
                "Model": "Exclusive ",
                "Yıl": "2016",
                "Yakıt": "Benzin",
                "Vites": "Yarı Otomatik",
                "KM": "88.500",
                "Renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "4",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "Seri": "VW CC 1.4 TSI ",
                "Model": "Exclusive ",
                "Yıl": "2016",
                "Yakıt": "Benzin",
                "Vites": "Yarı Otomatik",
                "KM": "88.500",
                "Renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "5",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "Seri": "VW CC 1.4 TSI ",
                "Model": "Exclusive ",
                "Yıl": "2016",
                "Yakıt": "Benzin",
                "Vites": "Yarı Otomatik",
                "KM": "88.500",
                "Renk": "Beyaz",
                "img": "../../assets/Cars/Wolkswagen-1.jpeg",
                "aciklama": "sahibinden temizz bakılmış satılık"
            },

            {
                "_id" : "6",
               " ilanadi": "Satılık Volkswagen",
                "marka": "Volkswagen ",
                "fiyat": "619.000 TL",
                "bulunduguyer": "Bursa/Nilüfer",
                "Seri": "VW CC 1.4 TSI ",
                "Model": "Exclusive ",
                "Yıl": "2016",
                "Yakıt": "Benzin",
                "Vites": "Yarı Otomatik",
                "KM": "88.500",
                "Renk": "Beyaz",
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