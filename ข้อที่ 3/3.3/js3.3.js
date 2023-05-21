    function makeUser() {
            return {
                name: "John",
                ref: this
            };
        };

        let user = makeUser();

        alert(user.ref.name);
        // undefined เพราะคนเรียก object คือ Window