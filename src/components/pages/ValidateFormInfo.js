export default function ValidateFormInfo(values){

    let errors = {}

    if(!values.ilanadı.trim()) {
        errors.ilanadı = "İlan Adı girilmesi zorunludur";
    }

    if(!values.marka.trim()){
        errors.marka = "Marka girilmesi zorunludur";
    }

    if(!values.fiyat.trim()){
        errors.fiyat = "Fiyat girilmesi zorunludur";
    }

    if(!values.bulunduguyer.trim()){
        errors.bulunduguyer = "Bulunduğu Yerin girilmesi zorunludur";
    }

    if(!values.seri.trim()){
        errors.seri = "Seri girilmesi zorunludur";
    }

    if(!values.model.trim()){
        errors.model = "Model girilmesi zorunludur";
    }

    if(!values.yıl.trim()){
        errors.yıl = "Yıl girilmesi zorunludur";
    }

    if(!values.yakıt.trim()){
        errors.yakıt = "Yakıt girilmesi zorunludur";
    }

    if(!values.vites.trim()){
        errors.vites = "Vites girilmesi zorunludur";
    }

    if(!values.km.trim()){
        errors.km = "KM girilmesi zorunludur";
    }

    if(!values.renk.trim()){
        errors.renk = "Renk girilmesi zorunludur";
    }

    if(!values.aciklama.trim()){
        errors.aciklama = "Açıklama girilmesi zorunludur";
    }
    
    return errors;
}