//1.1
const formulary = [];

const addToFormulary = medicineList => {
    for (let i = 0; i < medicineList.length; i++) {
        if (!formulary.includes(medicineList[i])) {
            formulary.push(medicineList[i]);
            console.log(`${medicineList[i]} successfully added to formulary.`);
        } else {
            console.log(`${medicineList[i]} already exists in the formulary`);
        }
    }
}

addToFormulary(['Paracetamol', 'Ibuprofen']);
addToFormulary(['Amoxicillin']);
addToFormulary(['Codeine', 'Diclofenac', 'Simvastatin', 'Tramadol']);
console.log(formulary)

//1.2
const inventory = [];
function Medicine(name, packSize, strength, noOfPacks) {
    this.Name = name;
    this.Strength = strength;
    this.PackSize = packSize;
    this.TotalPacks = noOfPacks;
}

const addToInventory = medicineList => {
    for (let i = 0; i < medicineList.length; i++) {
        if (formulary.includes(medicineList[i].Name)) {
            inventory.push(medicineList[i]);
            console.log(`${medicineList[i].Name} added to inventory.`);
        } else {
            console.log(`${medicineList[i].Name} does not exist in the formulary, therefore not added to the inventory`);
        }
    }

}
const Paracetamol = new Medicine('Paracetamol', 50, '500mg', 100);
const Ibuprofen = new Medicine('Ibuprofen', 50, '500mg', 100);
const Amoxicillin = new Medicine('Amoxicillin', 20, '250mg', 20);
const Tramadol = new Medicine('Tramadol', 100, '50mg', 5);
const Codeine = new Medicine('Codeine', 10, '30mg', 20);
const Simvastatin = new Medicine('Simvastatin', 10, '10mg', 10);
const Warfarin = new Medicine('Warfarin', 50, '3mg', 5);

addToInventory([Paracetamol, Ibuprofen, Amoxicillin, Tramadol, Codeine, Simvastatin, Warfarin]);
console.table(inventory);
