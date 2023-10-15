import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-20 py-10">
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <h2 className="collapse-title text-xl text-error font-medium">
            1. How will you improve performance of React Application
          </h2>
          <div className="collapse-content">
            <li>Using a React.PureComponent</li>
            <br />
            <li>Making Data Immutable</li>
            <br />
            <li>Using the Production Build</li>
            <br />
            <li>Binding Functions Early</li>
            <br />
            <li>Using Multiple Chunk Files</li>
            <br />
            <li>Enabling Gzip on Your Web Server</li>
            <br />
          </div>
        </div>
        <div
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <h2 className="collapse-title text-xl text-error font-medium">
            2.what are the different ways to manage state react application
          </h2>
          <div className="collapse-content">
            <li>
              Local (UI) state Local state is data we manage in one or another
              component.
            </li>
            <li>
              Global (UI) state Global state is data we manage across multiple
              components.
            </li>
            <li>
              Server state Data that comes from an external server that must be
              integrated with our UI state.
            </li>
            <li>
              URL state Data that exists on our URLs, including the pathname and
              query parameters.
            </li>
          </div>
        </div>
        <div
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <h2 className="collapse-title text-xl text-error font-medium">
            3.how does prototypal inheritance work?
          </h2>
          <div className="collapse-content">
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as . The Prototypal Inheritance is a
              feature in javascript used to add methods and properties in
              objects. It is a method by which an object can inherit the
              properties and methods of another object. Traditionally, in order
              to get and set the] of an object, we use Object.getPrototypeOf and
              Object.setPrototypeOf. Nowadays, in modern language, it is being
              set using
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-error text-xl font-medium">
            4.Why should we not update the state directly?
          </div>
          <div className="collapse-content">
            <p>
              One should never update the state directly because of the
              following reasons: If you update it directly, calling the
              setState() afterward may just replace the update you made. When
              you directly update the state, it does not change this.state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value. You will lose control of the state across all
              components.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <h2 className="collapse-title text-error text-xl font-medium">
            5.How will you search a products by name ?
          </h2>
          <div className="collapse-content">
            <p>
              There are different methods in JavaScript that you can use to
              search for an item in an array. Which method you choose depends on
              your specific use case.
            </p>
            <p>Filter ,Find, Includes, IndexOf</p>
          </div>
        </div>
        <div
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <h2 className="collapse-title text-xl text-error font-medium">
            6.what is the unit test why we use?
          </h2>
          <div className="collapse-content">
            <p>
              Let's start with the definition: Unit testing is a software
              testing method where “units”—the individual components of
              software—are tested. Developers write unit tests for their code to
              make sure that the code works correctly. This helps to detect and
              protect against bugs in the future
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
