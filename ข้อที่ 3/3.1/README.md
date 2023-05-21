#Codecamp13
สุรางคนา ตากันธะ
Advance JS Part 1_Methods ของ Object Lab # 1
    2.1  การทำงานของ code ดังกล่าวจะได้อะไรออกมา

        let user = {
            name: "John",
            go: function() { alert(this.name) }
        }

        (user.go)() // Error เพราะ ไม่มี ; หลังประกาศ object ที่ชื่อ user