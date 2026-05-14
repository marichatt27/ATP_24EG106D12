
let marks=[10,20,30]
s=marks[0];
for(let i=0;i<marks.length;i++)
{
    if(s>marks[i]){
        s=marks[i]
    }
}
console.log("Smallest element=",s)