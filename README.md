![cover](.github/capa-feedback-widget.jpg?style=flat)

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=0A1033">
  <img src="https://img.shields.io/static/v1?label=NLW&message=08&color=8257E5&labelColor=0A1033" alt="NLW 06" />
</p>

## 💻 Project [Mobile]
Application for help final users when something happen on your web page, making possible send feedbacks about bugs, ideas or others things with one screenshot and comment.

## ✨ Technologies

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Axios
-   [ ] Express
-   [ ] Cors
-   [ ] Prisma
-   [ ] Jest
-   [ ] Mailtrap.io

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/community/file/1102912516166573468). It's necessary have account on [Figma](http://figma.com/) to access.

## Running the project

### Firt Step [Install dependencies]

On ./nlw-feedback-widget-mobile directory
```cl
npm install
```

On ./nlw-feedback-widget-mobile/server directory
```cl
npm install
```

### Second Step [Prisma Database]

Run this command on your terminal in ./server directory:
```ci
npx prisma migrate dev
```

### Third Step [Mailtrap Credentials]

Find ```nodemailer-mail-adapter.ts``` file in ./server and put your mailtrap credentials:
```cl
const transport = nodemailer.createTransport({
	host: {MAIL_HOST},
	port: 2525,
	auth: {
		user: {MAIL_USER},
		pass: {MAIL_PASSWORD}
	}
});
```

### Last Step [Run]

Download Expo Go app in your phone to see this app running or you can use some emulator for Android or IOS.

For finally run this project:

On ./nlw-feedback-widget-mobile for run expo server:
```ci
expo start
```

## 📄 Licença

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.