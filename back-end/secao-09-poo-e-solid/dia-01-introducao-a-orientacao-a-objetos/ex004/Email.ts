class Email {
  private _from: string;
  private _to: string;
  private _subject: string;
  private _message: string;

  constructor(f: string, t: string, s: string, m: string) {
    this._from = f;
    this._to = t;
    this._subject = s;
    this._message = m;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 20) this._subject = newSubject;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  get subject(): string {
    return this._subject;
  }

  get content(): string {
    return `
    From: ${this._from} to ${this._to},
    ${this._subject}

    ${this._message}`;
  }
}

class MailList {
  constructor(private _mailList: Email[] = []) {}

  get all(): Email[] {
    return this._mailList;
  }

  getEmailsBySender(mailAddress: string): Email[] {
    return this._mailList.filter((mail) => mail.from === mailAddress);
  }

  getEmailsByReceiver(mailAddress: string): Email[] {
    return this._mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(search: string): Email[] {
    return this._mailList.filter((mail) => mail.subject.indexOf(search) !== -1);
  }

  addEmail(newEmail: Email): void {
    this._mailList.push(newEmail);
  }

  removeEmail(mailToRemove: Email): void {
    this._mailList = this._mailList.filter((mail) => mail !== mailToRemove);
  }
}

// Para testar
const friendEmail = "friend@personalmail.com";
const myEmail = "me@personalmail.com";

const email1 = new Email(
  myEmail,
  friendEmail,
  "Car wash",
  "There's a new car wash in town. Did you know?"
);
const email2 = new Email(
  friendEmail,
  myEmail,
  "Reply - Car wash",
  "Great! My car is really dirty. How much do they charge?"
);
const email3 = new Email(
  myEmail,
  friendEmail,
  "Reply - Reply - Car wash",
  "$5.00, and you get a free polishing cloth"
);
const email4 = new Email(
  "me@companymail.com",
  "ceo@companymail.com",
  "Day off monday",
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`
);
const email5 = new Email(
  "ceo@companymail.com",
  "me@companymail.com",
  "Reply - Day off monday",
  "The entire company will have a day off on monday =D"
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log(
  "------ personalMailList.getEmailsBySender('me@personalmail.com'):"
);
personalMailList
  .getEmailsBySender(myEmail)
  .forEach((mail) => console.log(mail.content));

const email6 = new Email(
  myEmail,
  "friend2@personalmail.com",
  "Day off monday",
  `Oh yes!
   My boss says we'll have Monday off.
   Want to go to the movies?`
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log("------ personalMailList.getEmailsBySubject('Day off'):");
personalMailList
  .getEmailsBySubject("Day off")
  .forEach((mail) => console.log(mail.content));
personalMailList.removeEmail(email5);

console.log("------ professionalMailList.all:");
professionalMailList.all.forEach((mail) => console.log(mail.content));

console.log("------ personalMailList.all:");
personalMailList.all.forEach((mail) => console.log(mail.content));
