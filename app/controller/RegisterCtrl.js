myApp.controller('RegisterCtrl', function($scope, $http){
  console.log('RegisterCtrl');
  var vm = this;
  vm.name = "mudit Jain";

  var regData = {};
//
// first_name[string]
// last_name[string]
// email[string]
// mobile[number]
// password[string]
// address[string]
// city[string]
// state[string]
// zip[string]
// gender[string]  M for Male , F for Female
// dob[string]

   vm.registerme = function(){
     regData.firstname= vm.userdata.firstname;
     regData.lastname= vm.userdata.lastname;
     //For Publisher 2, For Advertiser 3, For End User 4
     regData.user_role= "4";
     regData.email= vm.userdata.email;
     regData.pass= vm.userdata.password;
     regData.mobile = vm.userdata.mobile;
     regData.state =  vm.userdata.state;
     regData.city =  vm.userdata.city;
     regData.address =  vm.userdata.address;
     regData.zip =  vm.userdata.zip;
     regData.dob =  vm.userdata.dobd +"-"+vm.userdata.dobm+"-"+vm.userdata.doby;
     regData.gender = vm.userdata.gender;

     console.log(regData);

    //  var config = {
    //     headers : {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       }
    //   }
    //http://rest.learncode.academy/api/johnbob/friends
     $http.post('http://183.182.84.197/paravey/webservices/v1/api/register', regData)
     .then(
       function(response){
         console.log(response);
       },
       function(response){
         console.log(response)
       }
    );

    //  $http({
    //       url: "http://183.182.84.197/paravey/webservices/v1/api/register",
    //       method: 'POST',
    //       data: regData,
    //       headers : {'Content-Type':'application/json', 'Accept':'application/json'}
    //   }).success(function(response){
    //     console.log(response);
    //   }).error(function(response){
    //     console.log(response);
    //   })

   };

   vm.bDay = [];
   for(i = 0; i<31; i++){
     vm.bDay[i] = i;
   }
   console.log(vm.bDay);
});
