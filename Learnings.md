## Learn SCSS : 

## 1. SCSS ka use kya hai?
1. Code ko clean aur organized banata hai:
Tumko baar-baar wahi code copy-paste nahi karna padta. Jaise agar tumne ek color baar-baar use karna hai, toh ek variable me define kar lo, aur bas wahi use karte raho.


2. Variables ka support:
Example:

scss
Copy
Edit
$primary-color: #3498db; // Bas ek jagah define karo
body {
  background-color: $primary-color; // Fir jitni baar use karna hai kar lo
}

3. Nesting (andar code likhna):
Normal CSS me tumhe har class ke liye alag-alag likhna padta hai. SCSS me andar hi andar likh sakte ho.
Example:

scss
Copy
Edit
nav {
  ul {
    li {
      color: red; // Nested style
    }
  }
}

4. Mixins aur Functions:
Ye tumhare code ko aur reusable banata hai.
Example:

scss
Copy
Edit
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
  <!-- Haan, bilkul! SCSS me function-like behavior banane ke liye tumhe @mixin use karna padega. Mixin ek reusable block of code hai jo tum kahin bhi include kar sakte ho. -->
}

5. div {
  @include center; // Bas yaha likh diya, kaam ho gaya
}

## 2. Media queries ?

1. Media Queries kya hai?
Media queries CSS ka ek feature hai jo tumhe responsive design banane me madad karta hai. Matlab tum apni website ko alag-alag devices (mobile, tablet, laptop, desktop) ke screen size ke hisaab se adjust kar sakte ho.

2. Use kya hai?
Media queries ka use hota hai:

Website ko mobile-friendly banane ke liye.
Different screen sizes par alag-alag styles apply karne ke liye.
Flexible aur responsive layouts create karne ke liye.


3. /* Normal style for desktop */
body {
  background-color: lightblue;
  font-size: 20px;
}

/* Mobile ke liye style */
@media (max-width: 600px) {
  body {
    background-color: lightgreen;
    font-size: 16px;
  }
}


4. @media ka matlab hai "media query start ho rahi hai."
(max-width: 600px) ka matlab hai ki jab screen ka width 600px ya usse chhota hoga, tab yeh styles apply honge.
Tum alag-alag conditions laga kar responsive design bana sakte ho.



5. mujhe kaise pata chalega ki kiske scrreen ke liye kya aur kaise banana hai?

Yeh ek practical sawaal hai, aur iska jawab hai planning aur testing! Tumhe screen ke popular sizes aur apni website ka audience kaise devices use kar rahi hai


## 3. Box-Sizing ?

1. Box-sizing kya hai?
CSS me box-sizing ek property hai jo decide karti hai ki kisi element ka total size (width + height) kaise calculate hoga.

Problem Without Box-sizing:
By default, jab tum kisi element ki width aur height define karte ho, usme padding aur border ko count nahi kiya jata. Matlab, element ka actual size tumhare sochne se zyada ho jata hai.

Example:



div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 10px solid black;
}

Width: 200px (tumne define kiya)
+ Padding: 20px (left + right = 40px)
+ Border: 10px (left + right = 20px)
Total Actual Width: 260px


Solution: box-sizing
Tum box-sizing: border-box; use karoge to ye problem solve ho jayegi. Ab padding aur border ko width aur height ke andar hi count kiya jayega.

Example with box-sizing: border-box;:



div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
}
Width: 200px (fixed, including padding and border)
Actual Width ab wahi rahega jo tumne diya tha: 200px



3. Box-sizing ke Values:
content-box (Default):

Sirf content ki width aur height define hoti hai.
Padding aur border alag se count hote hain.


border-box:

Width aur height me padding aur border include hote hain.
Ye responsive design ke liye best hota hai.




4. Kaise use karte hain?
Mostly, tum sabhi elements ke liye border-box set karte ho:

css

/* Sabhi elements ke liye box-sizing set kar do */
* {
  box-sizing: border-box;
}


5. Why Use border-box?
Tumhe total size calculate karne ki tension nahi hoti.
Responsive layouts banana easy ho jata hai.
Code clean aur predictable lagta hai.


## 4. Flex-Direction ?

1. Flex-direction kya hai?
flex-direction ek CSS property hai jo define karti hai ki flex items (child elements) container ke andar kaise align honge:

Horizontal line me (row)
Vertical line me (column)

By default, flex-direction: row; hoti hai, matlab items left to right horizontally arrange hote hain.

2. Kaise Use Karte Hain?
Pehle tum parent container me display: flex; lagao.
Uske baad flex-direction set karo, jo tumhare layout ke hisaab se hoga.

3. Flex-direction ke Values:
row (Default):
Items horizontal line me left to right align hote hain.

.container {
  display: flex;
  flex-direction: row;
}
row-reverse:
Items horizontal line me right to left align hote hain.


4. .container {
  display: flex;
  flex-direction: row-reverse;
}
column:
Items vertical line me top to bottom align hote hain.


.container {
  display: flex;
  flex-direction: column;
}
column-reverse:
Items vertical line me bottom to top align hote hain.



.container {
  display: flex;
  flex-direction: column-reverse;
}



5. row (Default):


1   2   3


row-reverse:


3   2   1


column:


1
2
3

column-reverse:


3
2
1

## 5. Flex-end kya hai?

1. Flex-end kya hai?
flex-end ek alignment value hai jo flex items ko flex container ke end (right ya bottom) par align karti hai, depending on flex-direction.

2. Kahaan Use Hota Hai?
flex-end ka use justify-content aur align-items properties ke saath hota hai.

    1. Justify-content ke saath
justify-content: flex-end; ka matlab hai ki flex items main axis ke end par align honge.

Agar flex-direction: row; hai, to right side pe align hoga.
Agar flex-direction: column; hai, to bottom pe align hoga.

    2. Align-items ke saath
align-items: flex-end; ka matlab hai ki flex items cross axis ke end par align honge.

Agar flex-direction: row; hai, to items bottom par align honge.
Agar flex-direction: column; hai, to items right side pe align honge.

3. Explanation:
Agar flex-direction: row; ho, to:

justify-content: flex-end; items ko right side le jayega.
align-items: flex-end; items ko bottom par le jayega.
Agar flex-direction: column; ho, to:

justify-content: flex-end; items ko bottom par le jayega.
align-items: flex-end; items ko right side le jayega.

4. Why Use Flex-end?
Tum specific items ko container ke end me align karna chahte ho.
Useful for layouts jaha tumhe buttons ya text ko right ya bottom align karna ho.


## 6. Outline kya hai?

1. Outline kya hai?
outline ek CSS property hai jo element ke bahar ek line (outline) draw karne ke liye use hoti hai. Yeh line element ke border ke bahar hoti hai, aur isse element ko highlight ya visually focus karne ke liye use kiya jata hai.


2. Outline aur Border me Difference
Position:

outline hamesha border ke bahar hota hai.
border hamesha element ke andar ki jagah leta hai (box model ke part me).
Impact on Layout:

outline element ke size ko change nahi karta.
border element ke size ko affect karta hai.
Style Options:

outline ke andar radius (rounded corners) nahi laga sakte.
border ke liye tum border-radius use kar sakte ho.

3. Outline ke Properties:

@1. outline-width
    Outline ki thickness define karta hai.

    outline-width: 2px;

@2. outline-style

Outline ka style define karta hai (solid, dashed, dotted, etc.).

    outline-style: solid;

@3. outline-color

Outline ka color define karta hai.

    outline-color: red;

@4. outline-offset

Outline ko element se thoda door ya andar move karta hai.

    outline-offset: 5px;

@5. Outline ka Use Case:
Focus State: Form elements (buttons, inputs) ko focus hone par highlight karne ke liye.


## 7. Align-self ?


align-self kya hai?
align-self ek CSS property hai jo individual flex items ko cross axis par align karne ke liye use hoti hai.

Yeh parent container ke align-items rule ko override karti hai.
Agar kisi ek item ko alag alignment dena hai, toh align-self use karte hain.

2. Default Value:
By default, align-self: auto; hota hai.

Iska matlab hai ki yeh parent container ke align-items property ko follow karega.

3. Values of align-self:
    
    @1. auto

Default behavior. Parent container ke align-items ko follow karega.

align-self: auto;

    @2. flex-start

Item ko cross axis ke start me align karega.

align-self: flex-start;

    @3. flex-end

Item ko cross axis ke end me align karega.

align-self: flex-end;

    @4. baseline

Item ko text baseline ke hisaab se align karega (mostly for text alignment).

align-self: baseline;

    @5. stretch (Default)

Item ko available space ke according stretch karega (agar height ya width fixed nahi hai).

align-self: stretch;

4. Use Case:

Agar kisi ek item ko container ke baaki items se alag tarike se align karna ho.
Useful in complex layouts jaha individual item alignment ki zarurat ho.


5&. Visualization Tip:
align-items = poore group ke liye alignment.
align-self = ek specific item ka alignment.


## 8. &:hover kya hai?

1. &:hover ek SCSS (Sassy CSS) feature hai jo element ke hover state ko handle karne ke liye use hota hai.

Jab tum kisi element ke upar mouse le jaate ho, tab hover state active hoti hai.
SCSS me & ka use current selector ko refer karne ke liye hota hai.
Iska matlab hai ki &:hover ka use nested structure me hover styles likhne ke liye hota hai.

2. SCSS Syntax with &:hover:
SCSS me nested syntax ka use karke:

scss
Copy
Edit
.button {
  background-color: blue;
  color: white;

  &:hover {
    background-color: darkblue;
    color: yellow;
  }
}

3. 

&: Yeh parent selector ko refer karta hai (is case me .button).


:hover: Yeh hover state ko target karta hai.


## 9. cursor Property in CSS

1. cursor ek CSS property hai jo mouse pointer ka style define karti hai jab user kisi element ke upar hover kare. Iska use user ko visual feedback dene ke liye hota hai.

2. 
cursor Property in CSS
cursor ek CSS property hai jo mouse pointer ka style define karti hai jab user kisi element ke upar hover kare. Iska use user ko visual feedback dene ke liye hota hai.

Common Values of cursor:
default

Normal arrow pointer (default mouse style).
css
Copy
Edit
cursor: default;
pointer

Hath (hand) ban jata hai, jaise ki links ke liye hota hai.
css
Copy
Edit
cursor: pointer;
text

Text selection cursor (I-bar), jaise input ya editable text areas me hota hai.
css
Copy
Edit
cursor: text;


and many more .....

## 10. CSS filter Property ?

1. CSS filter Property (Short Notes)
The filter property is used to apply visual effects (like blur, brightness, contrast, etc.) to elements like images, text, or videos. It’s like adding filters on Instagram!

2. Common Filter Functions:

    @1. blur(px)
Makes the element blurry.

css
Copy
Edit
filter: blur(5px); /* 5px blur effect */

    @2. brightness(%)
Adjusts the brightness (100% = default).

css
Copy
Edit
filter: brightness(150%); /* 50% brighter */

    @3. contrast(%)
Adjusts contrast (100% = default).

css
Copy
Edit
filter: contrast(200%); /* High contrast */

    @4. grayscale(%)
Converts the element to grayscale (0% = normal, 100% = fully grayscale).

css
Copy
Edit
filter: grayscale(100%);

    @5. invert(%)
Inverts the colors (100% = fully inverted).

css
Copy
Edit
filter: invert(100%);

    @6. drop-shadow(x, y, blur, color)
Adds shadow to the element.

css
Copy
Edit
filter: drop-shadow(5px 5px 10px gray); /* Shadow with offset and blur */


3. drop-shadow(x, y, blur, color)
Adds shadow to the element.

css
Copy
Edit
filter: drop-shadow(5px 5px 10px gray); /* Shadow with offset and blur */


## 11. CSS animation Property ?

    @1. @keyframes
Defines the steps of the animation (from start to finish).



@keyframes example {
  0% {
    background-color: red;
  }
  100% {
    background-color: blue;
  }
}

animation-duration: 2s; /* 2 seconds */

     @2. animation-timing-function
Controls the speed curve of the animation (e.g., ease-in, ease-out).

animation-timing-function: ease-in-out;



animation-iteration-count: infinite; /* Infinite loop *

animation-delay: 1s; /* 1 second delay */
animation-play-state: paused; /* Pauses animation */


##  12. Transition ?

1.  Transition kya hai?

CSS transition ek property hai jo tumhe smoothly ek style change ko animate karne ka mauka deti hai jab koi state change hota hai. Jaise ki jab koi element hover hota hai, ya kisi element ki property change hoti hai, to transition us change ko smooth bana deta hai, instead of instantaneous.

2. Transition ki Basic Properties:

@1 transition-property

Yeh specify karta hai ki kaunsi CSS property ko animate karna hai.

transition-property: background-color;


@2 transition-duration

Yeh specify karta hai ki animation ko kitni der me complete hona chahiye.
Time ko seconds (s) ya milliseconds (ms) me specify karte hain.

transition-duration: 0.5s; /* 500 milliseconds */

@3 transition-timing-function

Yeh define karta hai ki animation kis rate pe chalega. (Ease, Linear, etc.)

transition-timing-function: ease-in-out; 

@4 transition-delay

Yeh specify karta hai ki animation start hone se pehle kitna time wait karna hai.

transition-delay: 0.2s;

@5 Shorthand for Transition:
Tum transition property ko ek shorthand mein likh sakte ho:


transition: property duration timing-function delay; 

For example:

css
Copy
Edit
transition: background-color 0.5s ease-in-out 0.2s;


## 13. background :

1. background-image

Element ke background me image set karta hai.

background-image: url('image.jpg');

2. background-position

Background image ki position specify karta hai.
Example values: top left, center, bottom right, 50% 50%, etc.

background-position: center center;

3. background-size

Background image ka size define karta hai.
Example values: cover, contain, or specific values like 100px 200px.

background-size: cover

4. background: lightblue url('image.jpg') no-repeat center center / cover fixed;

Yeh shorthand multiple properties ko ek hi line me define kar raha hai:

Background color: lightblue
Background image: url('image.jpg')
Repeat: no-repeat
Position: center center
Size: cover
Attachment: fixed

## 14. &:before ?

1. 
&:before in SCSS (and CSS)
&:before ek pseudo-element hai jo tumhe element ke content ke pehle kuch content insert karne ki facility deta hai. SCSS me & ko parent selector ke reference ke roop me use kiya jata hai, jo tumhe SCSS me nesting ka fayda uthate hue zyada readable aur manageable code likhne ki suvidha deta hai.

2. &:before ki Basic Usage:
& ka use: SCSS me & ka matlab hota hai ki current parent selector ko refer karo.
:before pseudo-element: Yeh ek pseudo-element hai jo kisi element ke content ke pehle content insert karta hai.

SCSS Code:

.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  
  &:before {
    content: "👉 "; /* Adds a hand emoji before the button text */
  }
}
