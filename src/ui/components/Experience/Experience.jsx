import React, { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { supabase } from "@/lib/supabase";

export default function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Work").select("*");

        if (error) {
          throw new Error(error.message);
        }

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData();
  }, []);

  console.log(data); 

  return (
    <div className="flex flex-col gap-32 container min-w-full pb-64">
      <h1 className="text-2xl md:text-4xl text-primary dark:text-input-bg">
        Work Experience
      </h1>
      {data.map((item) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </div>
  );
}
