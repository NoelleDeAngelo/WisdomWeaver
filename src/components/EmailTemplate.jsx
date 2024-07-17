

export default function EmailTemplate({name, email, message}) {
  return (
    <div>
        <h1 >New Message</h1>
        <p >
          You have a message from <strong> {name}</strong>.
        </p>
        <p >
          Email: {email}
      </p>
      <p>{message}</p>
    </div>
  );
}