let parentEl = document.getElementById('seattle');
let parentEl2 = document.getElementById('tokyo');
let parentEl3 = document.getElementById('dubai');
let parentEl4 = document.getElementById('paris');
let parentEl5 = document.getElementById('lima');


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





let tokyoShop = {
    city: 'tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    hours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    avgCookieSale: 1.2,
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

            parentEl2.appendChild(hourlyEl);
        }
        // parentElement.appendChild();

    }

};
console.log(parentEl2);
tokyoShop.cookieSold();




let dubaiShop = {
    city: 'dubai',
    minCustomer: 11,
    maxCustomer: 38,
    hours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    avgCookieSale: 3.7,
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

            parentEl3.appendChild(hourlyEl);
        }
        // parentElement.appendChild();

    }

};
console.log(parentEl3);
dubaiShop.cookieSold();



let parisShop = {
    city: 'paris',
    minCustomer: 20,
    maxCustomer: 38,
    hours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    avgCookieSale: 2.3,
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

            parentEl4.appendChild(hourlyEl);
        }
        // parentElement.appendChild();

    }

};
console.log(parentEl4);
parisShop.cookieSold();


let limaShop = {
    city: 'lima',
    minCustomer: 2,
    maxCustomer: 16,
    hours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    avgCookieSale: 4.6,
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

            parentEl5.appendChild(hourlyEl);
        }
        // parentElement.appendChild();

    }

};
console.log(parentEl5);
limaShop.cookieSold();