class CalcController {
    
    constructor(){

        this._displayCalc = "0";
        this._currentDate = ""
    }
    initialize(){

        let displaycalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("data");
        let timeEl = document.querySelector("hora");

        displaycalcEl.innerHTML ="4567";
    }
    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}