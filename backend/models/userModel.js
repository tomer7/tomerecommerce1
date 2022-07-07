import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import findOrCreate from 'mongoose-findorcreate'

const userSchema = mongoose.Schema(
   {
      name: {
         type: String
      },
      email: {
         type: String
      },
      password: {
         type: String
      },
      isAdmin: {
         type: Boolean,
         default: false
      },
      googleId: String,
      githubId: String
   },
   {
      timestamps: true
   }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next()
   }

   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

userSchema.plugin(findOrCreate)

const User = mongoose.model('User', userSchema)

export default User
