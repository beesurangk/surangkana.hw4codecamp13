#Codecamp13
สุรางคนา ตากันธะ
Advance JS Part 1_Methods ของ Object Lab # 4
    2.1  ให้ Object ชื่อ ladder มี method ขึ้นและลง

        let ladder = {
            step: 0,
            up() {
                this.step++;
            },
            down() {
                this.step--;
            },
            showStep: function() { // shows the current step
                alert( this.step );
            }
        };

    2.2 Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

        ladder.up();
        ladder.up();
        ladder.down();
        ladder.showStep(); // 1

    2.3 ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

        ladder.up().up().down().showStep(); // 1