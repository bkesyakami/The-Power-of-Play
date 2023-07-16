// Beginning of file
extern crate rand;

use std::{thread, time};

// Function to return a random number between min and max
fn random_range(min: i32, max: i32) -> i32 {
    let random_num = rand::thread_rng().gen_range(min, max);
    return random_num;
}

fn main() { 
    // print a welcome message
    println!("Welcome to 'The Power of Play'!");

    // first call for a random number
    let mut rng = random_range(1, 10);
    let mut count = 0;

    loop {
        count += 1;
        println!("Game #{}: Choose a number between 1 and 10.", count);

        // get user's input
        let mut num = String::new();
        std::io::stdin().read_line(&mut num).expect("Failed to read line");
        let num: i32 = num.trim().parse().expect("Please type a number!");

        // check user's input
        if num == rng {
            println!("Nice! You guessed it right!");
        } else {
            println!("Try again next time!");
        }

        // sleep for a second
        thread::sleep(time::Duration::from_secs(1));

        // generate a new random number for the next game
        rng = random_range(1, 10);
    }

}  // End of file