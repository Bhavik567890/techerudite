export const fetchBlogs = async () => {
  try {
    const response = await fetch("http://3.7.81.243:3253/api/blog/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
};

export const fetchSettings = async () => {
  try {
    const response = await fetch(
      "http://3.7.81.243:3253/api/settings/fetch-frontend-details"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching settings:", error);
  }
};


export const fetchContact = async (data) => {
  try {
    const response = await fetch("http://3.7.81.243:3253/api/contact/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("API error:", error);
    return { error: error.message };
  }
};
