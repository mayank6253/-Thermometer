const calculateTemp = () => {
    const numberTemperature = document.getElementById('temp').value;
    // console.log(numberTemperature);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    const celToFah = (cel) => {
       let fahrenheit = Math.round((cel * 9/5) + 32);
       return fahrenheit;
    }  
    
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5/9);
        return celsius;
     }   
 

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemperature);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;        
    }else{
        result = fahToCel(numberTemperature);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`; 
    }
}


