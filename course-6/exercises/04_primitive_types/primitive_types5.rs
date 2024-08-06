fn main() {
    let cat = ("Furry McFurson", 3.5);

    // TODO: Destructure the `cat` tuple in one statement so that the println works.
    // let /* your pattern here */ = cat;

    match cat {
        (x, y) => println!("{:?} is {:?} years old", x, y),
    }

    // println!("{name} is {age} years old");
}
