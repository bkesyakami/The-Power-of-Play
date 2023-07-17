/* The Power of Play
 *
 * This program explores the potential for learning and creativity that comes from playing.
 * Play is a powerful tool for open and unrestricted exploration that can build skills and 
 * knowledge in ways that traditional instruction cannot. 
 */
 
#include <iostream>
#include <map>
#include <string>

using namespace std;

// A structure to represent a play element
struct PlayElement {
    string name;
    int ageGroup;
    int complexity;
    int knowledge;
    int creativity;
};

// A map to store the play elements
map<string, PlayElement> playElements;

// A function to add a play element
void addElement(string elementName, int ageGroup, int complexity, int knowledge, int creativity) {
    PlayElement element;
    element.name = elementName;
    element.ageGroup = ageGroup;
    element.complexity = complexity;
    element.knowledge = knowledge;
    element.creativity = creativity;

    playElements.insert(make_pair(elementName, element));
}

// A function to retrieve a play elements
PlayElement getElement(string elementName) {
    map<string, PlayElement>::iterator elementItr;
    elementItr = playElements.find(elementName);

    if (elementItr != playElements.end()) {
        return elementItr->second;
    } 
    else {
        cout << "Element does not exist!" << endl;
        PlayElement emptyElement;
        return emptyElement;
    }
}

// A function to list all play elements
void printElements() {
    map<string, PlayElement>::iterator elementItr;

    cout << "Current play elements: " << endl;
    for (elementItr = playElements.begin(); elementItr != playElements.end(); elementItr++) {
        PlayElement element = elementItr->second;
        cout << element.name << " - Age Group: " << element.ageGroup << " - Complexity: " << element.complexity << " - Knowledge: " << element.knowledge << " - Creativity: " << element.creativity << endl;
    }
}

int main() {
    // add some elements
    addElement("Doll", 0, 1, 0, 8);
    addElement("Ball", 3, 2, 0, 6);
    addElement("Shape Puzzle", 6, 4, 5, 2);
    addElement("Chess", 10, 5, 10, 0);

    // print out all elements
    printElements();

    // get element and print info
    PlayElement pElement = getElement("Chess");
    cout << "Chess Play Element: " << endl;
    cout << "Name: " << pElement.name << endl;
    cout << "Age Group: " << pElement.ageGroup << endl;
    cout << "Complexity: " << pElement.complexity << endl;
    cout << "Knowledge: " << pElement.knowledge << endl;
    cout << "Creativity: " << pElement.creativity << endl;

    return 0;
}