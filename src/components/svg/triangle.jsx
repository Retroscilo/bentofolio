export default function SVG({ color = "black", w = 56, h = 58, ...props }) {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 26 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.9312 14L25.961 8.75C25.9866 8.70564 26 8.65535 26 8.60417C26 8.55298 25.9866 8.50269 25.961 8.45833L24.2778 5.54167C24.2522 5.49732 24.2154 5.46049 24.1711 5.43489C24.1268 5.40929 24.0765 5.39582 24.0253 5.39583H17.9656L14.9357 0.145833C14.9102 0.101484 14.8733 0.0646569 14.829 0.0390569C14.7847 0.0134569 14.7344 -1.38781e-05 14.6832 1.0729e-08H11.3168C11.2656 -1.38781e-05 11.2153 0.0134569 11.171 0.0390569C11.1267 0.0646569 11.0898 0.101484 11.0643 0.145833L8.0344 5.39583H1.97472C1.92353 5.39582 1.87324 5.40929 1.82891 5.43489C1.78458 5.46049 1.74777 5.49732 1.72218 5.54167L0.0389698 8.45833C0.0134384 8.50269 0 8.55298 0 8.60417C0 8.65535 0.0134384 8.70564 0.0389698 8.75L3.06882 14L0.0389698 19.25C0.0134384 19.2944 0 19.3446 0 19.3958C0 19.447 0.0134384 19.4973 0.0389698 19.5417L1.72218 22.4583C1.74777 22.5027 1.78458 22.5395 1.82891 22.5651C1.87324 22.5907 1.92353 22.6042 1.97472 22.6042H8.0344L11.0643 27.8542C11.0898 27.8985 11.1267 27.9353 11.171 27.9609C11.2153 27.9865 11.2656 28 11.3168 28H14.6832C14.7344 28 14.7847 27.9865 14.829 27.9609C14.8733 27.9353 14.9102 27.8985 14.9357 27.8542L17.9656 22.6042H24.0253C24.0765 22.6042 24.1268 22.5907 24.1711 22.5651C24.2154 22.5395 24.2522 22.5027 24.2778 22.4583L25.961 19.5417C25.9866 19.4973 26 19.447 26 19.3958C26 19.3446 25.9866 19.2944 25.961 19.25L22.9312 14ZM19.6533 19.3881L15.1085 11.5131H17.4562L23.5203 22.0208H18.3023L19.6533 19.6798C19.6788 19.6354 19.6922 19.5852 19.6922 19.534C19.6922 19.4828 19.6788 19.4325 19.6533 19.3881ZM12.9246 19.1042H0.796514L3.40554 14.5834L4.75649 16.9244C4.78208 16.9687 4.81889 17.0055 4.86322 17.0311C4.90756 17.0567 4.95784 17.0702 5.00903 17.0702H14.0984L12.9246 19.1042ZM6.34674 8.61186L10.8915 16.4869H8.54381L2.47974 5.97917H7.69774L6.34673 8.32019C6.3212 8.36455 6.30776 8.41484 6.30776 8.46603C6.30776 8.51721 6.3212 8.5675 6.34674 8.61186ZM14.4351 16.4869H11.5649L10.1297 14L11.5649 11.5131H14.4351L15.8703 14L14.4351 16.4869ZM11.9015 10.9298L13.0754 8.89583H25.2035L22.5945 13.4166L21.2435 11.0756C21.2179 11.0313 21.1811 10.9945 21.1368 10.9689C21.0924 10.9433 21.0422 10.9298 20.991 10.9298H11.9015ZM25.2035 8.3125H13.412L14.7585 5.97917H23.857L25.2035 8.3125ZM17.2922 5.39583H14.5903C14.5391 5.39582 14.4888 5.40929 14.4444 5.43489C14.4001 5.46049 14.3633 5.49732 14.3377 5.54167L9.79302 13.4166L8.61919 11.3827L14.6833 0.875L17.2922 5.39583ZM11.4851 0.583333H14.1782L8.28248 10.7993L6.93595 8.46602L8.4553 5.83333L11.4851 0.583333ZM1.97466 6.27083L7.87042 16.4869H5.17729L0.628176 8.60417L1.97466 6.27083ZM0.796494 19.6875H12.588L11.2415 22.0208H2.14298L0.796494 19.6875ZM8.70779 22.6042H11.4097C11.4609 22.6042 11.5112 22.5907 11.5555 22.5651C11.5999 22.5395 11.6367 22.5027 11.6623 22.4583L16.207 14.5834L17.3808 16.6173L11.3167 27.125L8.70779 22.6042ZM14.5149 27.4167H11.8218L17.7175 17.2007L19.064 19.534L14.5149 27.4167ZM24.0253 21.7292L18.1296 11.5131H20.8227L22.3419 14.1458L25.3718 19.3958L24.0253 21.7292Z"
				className={props.className}
			/>
		</svg>
	);
}
