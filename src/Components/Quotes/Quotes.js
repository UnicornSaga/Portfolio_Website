import React from "react";
import "./Quotes.scss";

export default function Quotes() {
    return (
        <div className="quotes">
            <div className="container">
                <blockquote cite="https://en.wikipedia.org/wiki/Zero_to_One">
                    "It's easier to copy a model than to make something new: doing what we already
                    know how to do takes the world from 1 to N, adding more of something familiar. Every new creation
                    goes from 0 to 1."
                </blockquote>
                <cite> - Peter Thiel - Zero To One</cite>
            </div>
        </div>
    )
}