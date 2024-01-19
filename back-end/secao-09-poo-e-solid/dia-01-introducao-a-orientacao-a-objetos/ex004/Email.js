var Email = /** @class */ (function () {
    function Email(f, t, s, m) {
        this._from = f;
        this._to = t;
        this._subject = s;
        this._message = m;
    }
    Object.defineProperty(Email.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (newSubject) {
            if (newSubject.length <= 20)
                this._subject = newSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "content", {
        get: function () {
            return "\n    From: ".concat(this._from, " to ").concat(this._to, ",\n    ").concat(this._subject, "\n\n    ").concat(this._message);
        },
        enumerable: false,
        configurable: true
    });
    return Email;
}());
var MailList = /** @class */ (function () {
    function MailList(_mailList) {
        if (_mailList === void 0) { _mailList = []; }
        this._mailList = _mailList;
    }
    Object.defineProperty(MailList.prototype, "all", {
        get: function () {
            return this._mailList;
        },
        enumerable: false,
        configurable: true
    });
    MailList.prototype.getEmailsBySender = function (mailAddress) {
        return this._mailList.filter(function (mail) { return mail.from === mailAddress; });
    };
    MailList.prototype.getEmailsByReceiver = function (mailAddress) {
        return this._mailList.filter(function (mail) { return mail.to === mailAddress; });
    };
    MailList.prototype.getEmailsBySubject = function (search) {
        return this._mailList.filter(function (mail) { return mail.subject.indexOf(search) !== -1; });
    };
    MailList.prototype.addEmail = function (newEmail) {
        this._mailList.push(newEmail);
    };
    MailList.prototype.removeEmail = function (mailToRemove) {
        this._mailList = this._mailList.filter(function (mail) { return mail !== mailToRemove; });
    };
    return MailList;
}());
// Para testar
var friendEmail = 'friend@personalmail.com';
var myEmail = 'me@personalmail.com';
var email1 = new Email(myEmail, friendEmail, 'Car wash', 'There\'s a new car wash in town. Did you know?');
var email2 = new Email(friendEmail, myEmail, 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
var email3 = new Email(myEmail, friendEmail, 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
var email4 = new Email('me@companymail.com', 'ceo@companymail.com', 'Day off monday', "Next Tuesday is a holiday.\n  Are we going to work on Monday?");
var email5 = new Email('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
var personalMailList = new MailList([email1, email2, email3]);
var professionalMailList = new MailList([email4, email5]);
console.log('------ personalMailList.getEmailsBySender(\'me@personalmail.com\'):');
personalMailList.getEmailsBySender(myEmail).forEach(function (mail) { return console.log(mail.content); });
var email6 = new Email(myEmail, 'friend2@personalmail.com', 'Day off monday', "Oh yes!\n   My boss says we'll have Monday off.\n   Want to go to the movies?");
personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente
console.log('------ personalMailList.getEmailsBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach(function (mail) { return console.log(mail.content); });
personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(function (mail) { return console.log(mail.content); });
console.log('------ personalMailList.all:');
personalMailList.all.forEach(function (mail) { return console.log(mail.content); });
