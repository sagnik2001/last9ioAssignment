interface ResponseType{
    
}

export async function getContent<Empty ,ResponseType>(){
    const response = await fetch(`/rules.json`);
    if (Math.floor(response.status / 100) === 2) {
      return (await response.json()) as ResponseType;
    }
    const output = await response.json();
    const errMsg = "Something went wrong.";
    throw { wrapped: output };
  }