let url;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "http://localhost:8000";
} else {
  url = "https://dscucu.onrender.com";
}

export const confirmEmail = async (userObj) => {
  try {
    const response = await fetch(`${url}/api/confirm-email`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      error.error = error.message;
      return { error: error };
    }
    const data = await response.json();
    data.data = data.message;

    return { data: data };
  } catch (err) {
    console.log("err while making confirm email request");

    console.log(err.message);
  }
};
