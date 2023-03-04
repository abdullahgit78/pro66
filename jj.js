letper_1=['mohamAD',27,'stud'];
letper_2=['abdullah',22,'tech'];
let per_3={
fname:'matchMedia',
age:27,
vav:'prosted',
};
let car_1= {
type :'bmw',
year:2005,
km:0,
move:function(){
this.km=this.km+10
return this.km

}
};
let ex2={
fname:'maher',
lname:'almohamd',
fav:'math',

salary:'1000',
incsalary:function(){
this.salary=this.salary+100
return this.salary


},
cangefname:function(newname){
this.fname=newname

return"this name has been "


}

};
let per7={
fname:'mohanasd',
lname:'alalosh',
age:27,
fav:'math'
};
for(let keyname in per7){
console.log(keyname,per7[keyname]);


}
const names=["a","b","c"] 
for(let i=0;i<names.length;i++)

console.log(names[i])

names.forEach((e1, idx) => { console.log(e1); })
const nums_1=[5,8,6]
const colors_1=['red','green','blue']

for(let i=0;i<nums_1.length;i++){
    console.log(nums_1[i])

}

colors_1.forEach((currentvalue,i)=>{
console.log(i,currentvalue)
})
names.filter()








