# 📄 form-app
![formPNG](https://user-images.githubusercontent.com/56295769/206304633-7db6ab7c-3d28-42e8-9da1-f5099dbd2e50.PNG)

# 📄 Created with
* Vue.js
* Vuex
* Bootstrap
* Firebase

# 📄 About project
![FormGif](https://user-images.githubusercontent.com/56295769/206293043-d204c6b5-f16b-41c6-8857-3c045f261aac.gif)
* Description field is required and can't have more than 255 characters.
* Radio button Yes/No is required and validates when user submites form.
* Selector with choose vat is required.
* Text input with label "Price netto EUR" is required and also is disabled on default. When user chooses some vat value from the selector text input becomes able to put value.
* Text input with label "Price butto EUR" is always disabled but it shows value calculated using from "Price netto EUR" text input and value from vat selector.
* Submit button validates the form, in case form is valid, form hides and success alert shows. Whem form is invalid, form also hides but error alert show.

# 📄 Download
```
git clone https://github.com/OskarMularski98/form-app.git

# 📄 Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
