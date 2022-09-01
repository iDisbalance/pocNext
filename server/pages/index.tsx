import type { NextPage } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Widget from '../components/Widget'
import { useEffect } from 'react'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <main className={styles.widgets}>
        <div className={styles.widgetWrapper}>
          <p>First</p>
        </div>
        <div className={styles.widgetWrapper}>
          <p>Second</p>
          <div className="second"></div>
        </div>
      </main>
      <p>
        <Script type="text/javascript" strategy="beforeInteractive" src="/app.js">
          
        </Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/quick-access-a4fee7ca.js" integrity="sha256-c1PkFch2QuefgaycL1J/HdhQP6RX0CH7Fy0M8vk0/f0=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/common-1c41284c.js" integrity="sha256-J3O5lI68wkIp0y9k7piSUR4l0bKTgG2poE/FdYLuA+A=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/common-deps-bc6ad2f8.js" integrity="sha256-g71MZCFhK83RSndOZ1GQj2CN/oX4XnXcpbzp68vzmrU=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/node-modules-bf646d8a.js" integrity="sha256-h14paJgNS7DcVls0iiIUDWyuOKgjDZv+xGD1Z51vbGA=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/betslip-b8ea6797.js" integrity="sha256-4eG4m02uB9K4rbRq0rysGWvLTmCqxG7r4YEAfxV2uMI=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/best-bets-498e6fa3.js" integrity="sha256-v8JdzSMUfKMiB8OHa0T5AtPQ4PnAuJW4V65H4Ia6glI=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/in-play-calendar-9bb04f73.js" integrity="sha256-/vnMc0vEVfyWXtK9CMzTul053PT6rD/OgmJ7TZ5ctUY=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/competition-f36dc7f5.js" integrity="sha256-OijOiHCKObpxc/c9eqglg77JxLIyvlW314gyDaGhB8E=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/market-display-d38c1dc0.js" integrity="sha256-AMHCPysp4FE4dgNZmo9IXBjECFMIb0amwmOi5z0zadc=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/in-play-e08ca1da.js" integrity="sha256-cKTXLaesSsc7UOOmtRU+/5Zss9OEnUihroDB6lgTtpw=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/in-play-navigation-fe44ce71.js" integrity="sha256-SLRR88h0q/CgSaGRJkcKBqylqpi30uMk0TfeMvO7dv4=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/settled-bets-5d2f4b35.js" integrity="sha256-8T0L3LeONK7IhgqrapO4J/hWRPf4ybW+A0/frvT8pS4=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/cash-out-5b00c934.js" integrity="sha256-WpDPjuQsnSlmngZIucrRfS/L+BlqDP9cTtOeyP1LsqQ=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/login-d82daad3.js" integrity="sha256-A/H6XZKISXj2vTTIpgxbG8BWwu5u6PNIL2Yhow3bYJ4=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/prematch-navigation-a3ecafa1.js" integrity="sha256-HLmleV5Nzpa/kpcSdblBALLIxM728ywSuN074u87q44=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/dog-racing-155d97e0.js" integrity="sha256-KNTa/lLTxR44fbQe6NW9cZFyQUZXwGsd+kkRZrbLj3c=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/horse-racing-833d2cae.js" integrity="sha256-z2HVuP/ea7Z9o3bwY0M4m2na7uOZYog2YQr6pLgcdKc=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/in-play-scoreboard-6a9510bd.js" integrity="sha256-uly6EnHyWSIREuk/DFcn4gjtRc1Q6GmPvWJEvvSaxJA=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/highlight-block-2a1fd520.js" integrity="sha256-+xvRv4S8oqVChpOtwLmTbGlPu5Z6p7u//K3Uskmuka8=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/polyfills-33fb5eb8.js" integrity="sha256-76j9KNt8wOxCmKlamHsdEuoJ4AdED1VBMXNo6sQjz74=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/user-preferences-8e1e9814.js" integrity="sha256-d7REci20e/WtqilO/1PGLRfvYH1ltuo+b6IoVIJc81o=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/voucher-813735cf.js" integrity="sha256-uRfMvJhG7Y0Q3pvLT/MwkVdpd59ePF6rx38YUBBU83k=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/quick-access-a4fee7ca.js" integrity="sha256-c1PkFch2QuefgaycL1J/HdhQP6RX0CH7Fy0M8vk0/f0=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-navigation-b38a3737.js" integrity="sha256-xpPWQhRrA+M4V9jxUJIWr4fmmHn0j6DJ8UxuhRlb41U=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-market-display-48c759ce.js" integrity="sha256-+5oTvYfwx/6mVjK2pPNN32W+NkHtxUWMEn0pZT9Vgrw=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-results-e68769b1.js" integrity="sha256-0/gDt1BLgBi8gc+gdc3PUhoQq6eWx/BIltS4x+YrRIU=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-bets-settled-37b5cf75.js" integrity="sha256-RiphL8XWRB6yrdlrsGtqtF3NzJHAi78n8+ICSu7clow=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-bets-open-fc27c39e.js" integrity="sha256-npFszt/QcMedbOpmzGBIhv1sA+uE3N2Z58iDGmkmn+0=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-betslip-30373d01.js" integrity="sha256-GAo+KMp7AHmZr9ErDDNEcf11EQ6JljaTjJZzn+ob8uo=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/pools-betslip-tickets-c273cdff.js" integrity="sha256-ERYPG2qBwNli9t76zgwwu/gNBoUgGO8tNla1L5cUpCQ=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/breadcrumb-60235146.js" integrity="sha256-b4x0qjRUPobZZAQFxcjtgtrodpIHaWGenmN01GxYrAI=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/bet-history-fdaddbfb.js" integrity="sha256-tS1QF5edd6qsXNjWx6Ydbg8mD3MVxZLNjhDfCY97jFM=" crossorigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="https://fdjwidgets.lvs.co.uk/fdjgs/4.0.119/j/us-coupon-11cff7a0.js" integrity="sha256-+NiZFCvWD/4TnT3+QpkVIr6LhwkeCU+/IJq32BrplcM=" crossorigin="anonymous" strategy="beforeInteractive"></Script>



      </p>
    </div>
  )
}

export default Home
