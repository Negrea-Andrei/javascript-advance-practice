//*Client-side routing

/*Client - side routing is the type of routing where Javascript takes over the duty of handling the
routes in an application.Client - side routing helps in building single - page applications(SPAs)
without refreshing as the user navigates.For example, when a user clicks a navbar element,
the URL changes and the view of the page is modified accordingly, within the client.*/
//!Got home late from DevCom

//*React Router
/*Is a standard routing library for React applications. By using React Router,
we can specify React components, that can be rendered based on the route,
and so much more. Let’s dive in!*/

//*Link
/*But you may notice, when we click the links in the navbar, 
the browser is reloading for the next URL instead of using React Router. 
This isn’t what was promised! To help with this, React Router exports a custom Link element 
to be used instead of the regular a tag. We can replace the a tag in our navbar with the Link element.*/

//*Nested routes
/*We can add routes nested as the children of one another to ensure that the child gets rendered alongside the parent.*/

//?Default routes
/*If you want to render something as a default component when no path is added to Profile, you can add an index route to the children!*/

/*children: [
      { index: true, element: <DefaultProfile /> },*/
//!If you visit the /profile path now, you should be able to see some default content where the Outlet is rendered when the index path is rendered!
