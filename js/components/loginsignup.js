

(function () {
    //initialize firebase

    const config = {
        apiKey: "AIzaSyCBkT2QkwUwjCdQMRi0GIGEohkm8QqNDrY",
        authDomain: "careerrocket-f93ee.firebaseapp.com",
        databaseURL: "https://careerrocket-f93ee.firebaseio.com",
        projectId: "careerrocket-f93ee",
        storageBucket: "careerrocket-f93ee.appspot.com",
        messagingSenderId: "20227819319"
    };

    firebase.initializeApp(config);

    //Get elements
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginButton = document.getElementById('loginButton');
    const signUpButton = document.getElementById('signUpButton');
    const signUpEmail = document.getElementById('signUpEmail');
    const signUpPassword = document.getElementById('signUpPassword');
    const signUpConfirm = document.getElementById('signUpConfirm');
    //const logoutBtn


    if (loginButton) {
        var alert = $(".alert");

        const closeButtonAppear = () => {
            alert.css("display", "block");
        }

        $(".close").click(function () {
            alert.css("display", "none");
            console.log("Pressed.")
        });

        //add login event
        loginButton.addEventListener('click', e => {
            //get email and pass
            const email = loginEmail.value;
            const password = loginPassword.value;
            const auth = firebase.auth();
            //sign in
            const promise = auth.signInWithEmailAndPassword(email, password);
            promise
                .catch(e => closeButtonAppear());
            //                .then(console.log("log-in success!"));
        });



    }



    if (signUpButton) {
        var alert = $(".alert");
        var matchingPass = $(".alert2");
        var allForms = $(".alert3");
        var badEmail = $('.alert4');
        
        const closeButtonAppear = (alert) => {
            alert.css("display", "block");
        }


        $(".close").click(function () {
            alert.css("display", "none");
            allForms.css("display", "none");
            matchingPass.css("display", "none");
            badEmail.css("display", "none");

            console.log("Pressed.")
        });

        // const badEmail = () => {
        //     badEmail.css("display", "block");
        //     alert.css("display", "block");
        //     console.log
        // }

        signUpButton.addEventListener('click', e => {
            //get email and pass
            //TODO: CHECK for REAL EMAILS (CHECK IF EMAIL IS WELL FORMATED!)
            const email = signUpEmail.value;
            const password = signUpPassword.value;
            const confirmPassword = signUpConfirm.value;

            if (email != "" && password != "" && confirmPassword != "") {
                if (password == confirmPassword) {
                    const auth = firebase.auth();
                    //sign in
                    const promise = auth.createUserWithEmailAndPassword(email, password);
                    promise
                        .catch(e => console.log(e.message))
                    
                    
                        
                } else {
                    closeButtonAppear(matchingPass);
                }
            } else {
                closeButtonAppear(allForms);
            }



        });
    }
    //add signup event

    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Login success!")
            console.log(firebaseUser);
            if (firebaseUser) {
                window.location = './studentdashboard/studentdashboard.html'; //After successful login, user will be redirected to home.html
            }
        } else {
            console.log('not logged in');
            // TODO: Display this text somewhere on the screen for user notice. 
        }
    });

}());

// document.getElementById("closeButton").addEventListener('click', e => {
//     console.log("Hello!")
// });