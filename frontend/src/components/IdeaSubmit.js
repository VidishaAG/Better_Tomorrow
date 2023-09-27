import React from 'react'

export const IdeaSubmit = () => {
  const onClick = async (e) => {
    e.preventDefault();

    const data = {
      "name": document.getElementById("input-name").value,
      "email": document.getElementById("input-email").value,
      "heading": document.getElementById("input-subject").value,
      "description": document.getElementById("input-message").value
    };
    console.log(data)

    const url = "http://localhost:5000/submitIssue";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      alert("Your response is recorded successfully");
    } else {
      alert("An error occurred");
    }
  }
  return (
    <div className="ideaSubmit">
        <form className="cf">
            <div className="halfLeft">
                <input type="text" id="input-name" placeholder="Name" />
                <input type="email" id="input-email" placeholder="Email address" />
                <input type="text" id="input-subject"   placeholder="Idea Title" />
            </div>
            <div className="halfRight">
            <textarea name="message" type="text" id="input-message" placeholder="Description"></textarea>
            </div>
            <input type="submit" value="Submit" id="input-submit" onClick={onClick} />
        </form>
    </div>
  )
}
