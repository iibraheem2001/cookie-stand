let parentEl = document.getElementById('seattle');


let seattleShop = {
    city: 'seattle',
    minCustomer: 23,
    maxCustomer: 65,
    hours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    avgCookieSale: 6.3,
    cookieSoldArray: [],
    avgCustomer: function(){
        return  Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer)
    },
    hourTotal: function(){
        this.avgCustomer();
        for (let i = 0; i < this.hours.length; i++){
            this.cookieSoldArray.push(Math.ceil(this.avgCustomer() * this.avgCookieSale))
        }
    },
    cookieSold: function (){
        this.hourTotal()
      

        for (let i = 0; i < this.cookieSoldArray.length; i++){
            let hourlyEl = document.createElement('li');

            hourlyEl.innerText = this.hours[i] +' ' + this.cookieSoldArray[i];

            parentEl.appendChild(hourlyEl);
        }
        // parentElement.appendChild();

    }

};
console.log(parentEl);
seattleShop.cookieSold();