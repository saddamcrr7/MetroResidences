import './styles/main.scss';
import heroSction from './scripts/blocks/hero-section'
import roomsScetion from './scripts/blocks/rooms-section'
import facilitiesSection from './scripts/blocks/facilities-section'
import securitySection from './scripts/blocks/security-section'
import locationSction from './scripts/blocks/location-section'
import communitySction from './scripts/blocks/community-section'
import lastPage from './scripts/blocks/last-page'
import enquire from './scripts/blocks/enquire'

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

heroSction()
roomsScetion()
facilitiesSection()
securitySection()
locationSction()
communitySction()
enquire()
lastPage()
