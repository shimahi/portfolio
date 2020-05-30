import styles from 'assets/css/components/Headline.module.css'

const Headline = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.headline}>
      <h1>{children}</h1>
    </section>
  )
}

export default Headline
