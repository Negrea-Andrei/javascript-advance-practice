//*This will cover different function of CSS and HTML

//!The transform property takes in one or more CSS transform functions as its values, with those functions taking in their own value, usually an angle or a number.

//?rotate
//?scale
//?skew
//?translate

//*The key benefit of using transform is that it occurs during composition. This makes it cheaper to use compared to many other CSS properties

//!Transition

//*CSS transitions let you animate a change from an element’s initial state to an end state.

//?transition-property: the target of the transition
//?transition-duration: how long will the transition last
//?transition-timing-function: how it will be done
//?transition-delay: how long until the transition start

//*instead of all of this you could use just "transition"

//!Keyframes
//!Animations

/*Transitions were designed to animate an element from one state to another. 
They can loop, but they weren’t designed for that. Animations, on the other hand, were designed with the purpose of explicitly enabling loops.*/

/*Transitions need a trigger, such as the use of pseudo-classes like :hover or :focus, or by adding/removing a class via JavaScript. 
Animations, on the other hand, do not need such a trigger. Once you have your elements in place and CSS defined, 
an animation will start running immediately if that’s what you told it to do.*/

/*Transitions are not as flexible as using animations. When you define a transition, imagine you are sending that element on a journey 
in a straight line from point A to point B. Yes, the transition-timing-function can add some variation to the timing of this change, 
but it doesn’t compare to the amount of flexibility added by using animations.*/