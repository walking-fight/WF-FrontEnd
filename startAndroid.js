const { exec } = require('child_process')

const androidProjectRoot = '/Users/kimdonghyeun/develop/walk-fight-android'

const buildCommand = `${androidProjectRoot}/gradlew assembleDebug`

// const emulatorCommand = `~/Library/Android/sdk/emulator/emulator -avd ${process.env.AVD_NAME}`
const emulatorCommand = `~/Library/Android/sdk/emulator/emulator -avd Resizable_Experimental_API_33`

// exec(buildCommand, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error building project: ${error.message}`)
//     return
//   }

//   console.log(stdout)

// If the build succeeded, start the emulator.
exec(emulatorCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting emulator: ${error.message}`)
    return
  }

  console.log(stdout)
})
// })
