const billinput = document.getElementById('billtotalinput')
const tipinput = document.getElementById('tipinput')
const numberOfPeople = document.getElementById('numberOfPeople')
const TotalPerson = document.getElementById('perPersonTotal')


let numberofpeople = Number(numberOfPeople.innerHTML)

const calculatebill = () => {
    const billamount = Number(billinput.value)

    const tipamount = Number(tipinput.value) / 100

    const totalamount = billamount * tipamount

    const billtotal = billamount + totalamount
    
    const totalpeople = billtotal / numberofpeople

    TotalPerson.innerText = `$${totalpeople.toFixed(2)}`
}

const increasePeople =() => {
    numberofpeople += 1;
    numberOfPeople.innerText = numberofpeople
    calculatebill()
}

const decreasePeople = () => {
    if(numberofpeople==1){
        numberOfPeople.innerText = numberofpeople
    }
    else
    {
        numberofpeople -= 1;
    numberOfPeople.innerText = numberofpeople
    }
    calculatebill()
}