var arr = [];

for (var i = 0; i <= 4; i++){
    arr[i] = prompt('введите имена');
}

var user = prompt ('Enter User');

inArray(user, arr);

function inArray(user, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == user) {
            alert(user + ', добро пожаловать');
            return true;
        }
    }
    alert('false');
}

