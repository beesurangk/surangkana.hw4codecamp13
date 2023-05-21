#Codecamp13
สุรางคนา ตากันธะ
การทำงานของ code ดังกล่าวจะได้อะไรออกมา

        function makeUser() {
            return {
                name: "John",
                ref: this
            };
        };

        let user = makeUser();

        alert(user.ref.name);
        // undefined เพราะคนเรียก object คือ Window