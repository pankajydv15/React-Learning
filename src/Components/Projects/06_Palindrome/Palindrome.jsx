import {useState} from "react";

function Palindrome() {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState("");

  const checkPalindrome = (string) => {
    string = string.toLowerCase();
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return " it is not palindrome";
      }
    }
    return "yes Palindrome";
  };

  const HandleInput = (e) => {
    const value = e.target.value;
    setData(value);
    setShowData(checkPalindrome(value));
  };

  return (
    <>
      <input
        type="text"
        value={data}
        onChange={HandleInput}
        placeholder="Enter the string"
      />

      <p> {showData}</p>
    </>
  );
}

export default Palindrome;
