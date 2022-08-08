import styles from "../styles/PopularSections.module.css"

const PopularSections = () => {

    return (
		<section className = {styles["popular-sections"]}>
			<div className = {styles["popular-hotels"]}>
				<h2 className = {styles["section-title"]}>Популярные отели России</h2>
				<div className = {styles["popular-items"]}>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>

				</div>
			</div>
			<div className = {styles["popular-ways"]}>
				<h2 className = {styles["section-title"]}>Популярные направления</h2>

				<div className = {styles["popular-items"]}>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
				</div>
			</div>
		</section>
    )
}

export default PopularSections