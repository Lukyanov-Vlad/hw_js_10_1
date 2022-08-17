// Используя полученные знания, создайте новый объект, который будет 
// наследовать свойства и методы объекта, созданного из предыдущего домашнего
// задания по объектам (ДЗ №7). Выполните прототипное и функциональное 
// наследование на выбор. Модифицируйте (доработайте) любой из методов 
// родителя в его потомке.

const Weapon=function(dam){
    this.damage=dam;
    this.setDamage=(damage)=>{
        console.log('Вы нанесли '+damage+ ' единиц урона.')
    }
}

const FireWeapon=function(){
   
    Weapon.apply(this,arguments);
    
    this.show=()=>{
        console.log('Класс: огенстрельное оружие');
    }
    let verification=(value)=>{
        if(isNaN(value)){
            alert('Введено не число');
            return false;
        }else{
           return true; 
        }
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        let numberOfShoot=+prompt('Сколько выстрелов произвести?');
        if(verification(numberOfShoot)){
            parentDamage(numberOfShoot*this.damage);
        }
        
    }
}

const ColdWeapon=function(){ 
    
    Weapon.apply(this,arguments);
    
    this.show=()=>{
        console.log('Класс: холодное оружие');
    }
    this.sharp=()=>{
        if(confirm('Заточить оружие?')){
            this.damage=this.damage+10;
            console.log('Наносимый урон увеличен: '+this.damage+' единиц');
        }
    }
}


const Knife=function(){
    let type='Охотничий нож';
    ColdWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
        console.log('Урон: '+this.damage+' единиц');
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Нанесен удар ножом');
        parentDamage(this.damage);
    }
}
const Katana=function(){
    let type='Катана';
    ColdWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
        console.log('Урон: '+this.damage+' единиц')
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Нанесен удар катаной');
        parentDamage(this.damage);
    }
}

const Sword=function(){
    let type='Меч';
    ColdWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
        console.log('Урон: '+this.damage+' единиц')
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Нанесен удар мечом');
        parentDamage(this.damage);
    }
}

const Pistol=function(){
   let type='Пистолет';
    FireWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Стрельба из пистолета');
        parentDamage(this.damage);
    }
}

const Auto=function(){
    let type='Автомат';
    FireWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Стрельба из автомата');
        parentDamage(this.damage);
    }
}


const MachineGun=function(){
    let type='Пулемет';
    FireWeapon.apply(this,arguments);
    let parentShow=this.show;
    this.show=()=>{
        parentShow();
        console.log('Тип: '+type);
    }
    let parentDamage=this.setDamage;
    this.setDamage=()=>{
        console.log('Стрельба из пулемета');
        parentDamage(this.damage);
    }
}


const knife=new Knife(10);
knife.show();
console.log(knife);
knife.sharp();
knife.setDamage();