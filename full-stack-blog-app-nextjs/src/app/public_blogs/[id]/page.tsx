"use client";
import axios from "axios";
import { useEffect, useState } from "react";
interface blogTypes {
  title: string;
  description: string;
}
export default function Page({ params }: { params: { id: string } }) {
  const [blogs, setBlogs] = useState<blogTypes>({});
  useEffect(() => {
    async function getSingleBlog() {
      const res = await axios.get(`/api/post/${params.id}`);
      setBlogs({ ...res.data });
    }
    getSingleBlog();
  }, []);
  console.log(blogs);
  const formatText = (rawText) => {
    // Replace <subhead> with <h2>
    let formattedText = rawText
      .replace(/<subhead>/g, "<h2 className='font-bold text-3xl font-serif'>")
      .replace(/<\/subhead>/g, "</h2>");

    // Replace <linebreak> with <br>
    formattedText = formattedText.replace(/<linebreak>/g, "<br>");

    // Replace <list> and </list> with <ul> and </ul> respectively
    formattedText = formattedText
      .replace(/<list>/g, "<ul>")
      .replace(/<\/list>/g, "</ul>");

    // Find and format <item> tags within the list
    while (formattedText.includes("<item>")) {
      const startIndex = formattedText.indexOf("<item>");
      const endIndex = formattedText.indexOf("</item>") + "</item>".length;
      const listItem = formattedText.substring(
        startIndex + "<item>".length,
        endIndex - "</item>".length
      );
      const formattedItem = `<li>${listItem}</li>`;
      formattedText =
        formattedText.substring(0, startIndex) +
        formattedItem +
        formattedText.substring(endIndex);
    }

    // Replace <quote> and </quote> with <blockquote> and </blockquote>
    formattedText = formattedText
      .replace(/<quote>/g, "<blockquote>")
      .replace(/<\/quote>/g, "</blockquote>");

    // Replace <comment> and </comment> with <!-- and --> respectively
    formattedText = formattedText
      .replace(/<comment>/g, "<!--")
      .replace(/<\/comment>/g, "-->");

    // Replace <link>url</link> with <a href="url">url</a>
    formattedText = formattedText.replace(
      /<link>(.*?)<\/link>/g,
      '<a href="$1">$1</a>'
    );

    return formattedText;
  };

  const rawText = `
  <subhead>How to Pray a Blessing Over Your Kids</subhead>
  As a parent, it is easy to be hard on ourselves, wondering if there is more we could do for our kids. <linebreak>This is a common feeling! <linebreak>Yet, one of the profound lessons in life thus far is how it is not always the difficulty of the task that equates to impact. <linebreak>
  <list>
  <item>This is item 1.</item>
  <item>This is item 2.</item>
  </list>
  <quote>This is a quote.</quote>
  <comment>This is a comment.</comment>
  <link>https://www.example.com</link>
  `;

  const formattedOutput = formatText(rawText);

  return (
    <div className="mt-24 mx-14">
      <h1 className="font-bold text-3xl font-serif">{blogs.title}</h1>
      {/*for line break do <br> 
            
            for sub heading do : 
            <subhead> */}
      <p className="mt-4 font-serif text-base">{blogs.description}</p>
     
    </div>
  );
}
