import React from "react";

export default function Home({
  handleUsers,
  handlePosts,
  handleComments,
  section1TextColor,
  section2TextColor,
  section3TextColor,
  section1BoxColor,
  section2BoxColor,
  section3BoxColor,
}) {
  return (
    <section>
      <div
        onClick={handleUsers}
        style={{ color: section1TextColor, backgroundColor: section1BoxColor }}
      >
        Section 1
      </div>

      <div
        onClick={handlePosts}
        style={{
          color: section2TextColor,
          backgroundColor: section2BoxColor,
        }}
      >
        Section 2
      </div>

      <div
        onClick={handleComments}
        style={{
          color: section3TextColor,
          backgroundColor: section3BoxColor,
        }}
      >
        Section 3
      </div>
    </section>
  );
}
